import './Content.css';
interface ContentProps {
	isTitle: boolean;
	content: string;
}
export default function Content({ isTitle, content }: ContentProps) {
	return (
		<>
			{isTitle ? (
				<h1
					contentEditable
					aria-placeholder="Nueva Nota"
					className="title"
				>
					{content}
				</h1>
			) : (
				<div
					contentEditable
					aria-placeholder="Escribe lo que quieras..."
					className="content"
				>
					{content}
				</div>
			)}
		</>
	);
}
