import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Question from './components/Question';
import TeamScore from './components/TeamScore';
import './style.css';

export type TeamColor = 'red' | 'blue';

interface Question {
	title: string;
	variants: string[];
}

export function App() {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(import.meta.env.BASE_URL + '/questions.json')
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
			<TeamScore color="red" />
			<div className={'questions'}>
				{questions.map((question, index) => (
					<Question
						key={index}
						title={question.title}
						variants={question.variants}
					/>
				))}
			</div>
			<TeamScore color="blue" />
		</div>
	);
}

render(<App />, document.getElementById('app')!);
