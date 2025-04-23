export default function Files({ files }: { files: string[] }) {
	return (
		<>
			<aside>
				{files.map((file) => (
					<li>{file}</li>
				))}
			</aside>
		</>
	);
}
