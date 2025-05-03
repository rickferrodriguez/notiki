import { Notes } from '../types/notes.types';
import './Files.css';

export default function Files({ files }: { files: Notes[] }) {
    return (
        <>
            {files[0].title !== '' ? (
                <ul>
                    {files.map((file) => (
                        <li key={file.id}>{file.title}</li>
                    ))}
                </ul>
            ) : (
                <ul>
                    <li>Nueva nota</li>
                </ul>
            )}
        </>
    );
}
