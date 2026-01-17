import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Question from './components/Question';
import './style.css';

export function App() {
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/questions.json')
			.then((res) => res.json())
			.then((data) => {
				setQuestions(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Ошибка загрузки данных:", err);
				setLoading(false);
			});
	}, []);

	if (loading) return <div className="app-root">Загрузка...</div>;

	return (
		<div className={'app-root'}>
			{questions.map((question, index) => (
				<Question
					key={index}
					title={question.title}
					variants={question.variants}
				/>
			))}
		</div>
	);
}

render(<App />, document.getElementById('app'));
