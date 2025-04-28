import { Notes } from '../types/notes.types';
import './Files.css';

export default function Files({ files }: { files: Notes[] }) {
	return (
		<>
			<aside>
				<ul>
					{files.map((file) => (
						<li key={file.id}>{file.title}</li>
					))}
				</ul>
			</aside>
		</>
	);
}
