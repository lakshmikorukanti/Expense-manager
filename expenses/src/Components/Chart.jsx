import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { transactionData } from "../Redux/ledger/action";

function createColor(num) {
	return `rgba( ${random(255)}, ${random(255)}, ${random(255)})`;
}

function random(num) {
	return Math.floor(Math.random() * num);
}

export default function Chart() {
	const user = useSelector((state) => state.auth.user);
	var data = useSelector((state) => state.app.TData);
	const [chartData, setChartData] = useState({});
	// let data = [...TData];
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(transactionData(user));
	}, []);
	console.log(data);
	console.log();
	useEffect(() => {
		chart();
	}, [data]);
	// console.log(data)
	let userData = "";
	let credit = "";
	let debit = "";
	let totalCredit = 0;
	let balance = 0;
	let totalDebit = 0;
	if (data) {
		userData = data.filter((item) => item.user_id === user[0].id);
		credit = userData.filter((item) => item.type == "credit").map((item) => item.amount);
		debit = userData.filter((item) => item.type == "debit").map((item) => item.amount);
		for (let i = 0; i < credit.length; i++) {
			totalCredit += Number(credit[i]);
		}
		for (let i = 0; i < debit.length; i++) {
			totalDebit += Number(debit[i]);
		}
		balance = totalCredit - totalDebit;
	}

	const chart = () => {
		setChartData({
			labels: ["Credit", "Debit", "Balance"],
			datasets: [
				{
					// label: 'Attendance',
					data: [totalCredit, totalDebit, balance],
					backgroundColor: ["rgb(255,142,100)", "rgb(157, 0, 0)", "rgb(255,102,100)"],
				},
			],
		});
	};

	return (
		<div style={{ width: 400, marginLeft: "35%" }}>
			<Doughnut width={100} height={100} data={chartData} />
		</div>
	);
}
