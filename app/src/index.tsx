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
	const [isDragOver, setIsDragOver] = useState(false);

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

	const handleDragOver = (e: DragEvent) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	const handleDragLeave = (e: DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);
	};

	const handleDrop = (e: DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);

		const files = e.dataTransfer?.files;
		if (!files || files.length === 0) return;

		const file = files[0];
		if (!file.name.endsWith('.json')) {
			alert('Нужен файл формата JSON');
			return;
		}

		const reader = new FileReader();
		reader.onload = (event) => {
			try {
				const data = JSON.parse(event.target?.result as string);
				if (Array.isArray(data) && data.every(q => q.title && q.variants)) {
					setQuestions(data);
				} else {
					alert('Неверный формат JSON. Ожидается массив объектов с полями title и variants');
				}
			} catch (err: any) {
				alert(`Ошибка при парсинге JSON: ${err.message}`);
			}
		};
		reader.readAsText(file);
	};

	if (loading) return <div className="app-root">Загрузка...</div>;

	return (
		<div 
			className={`app-root ${isDragOver ? 'drag-over' : ''}`}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
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
