import Link from 'next/link';

async function getBook(bibleId, bookId) {
				const res = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${bookId}`, {
								cache: 'no-store',
								method: 'GET',
								headers: {
												'api-key': process.env.BIBLE_API_KEY
								},
				});

				const data = res.json();

				return data;
}

async function getChapters(bibleId, bookId) {
				const res = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${bookId}?include-chapters=true`, {
								cache: 'no-store',
								method: 'GET',
								headers: {
												'api-key': process.env.BIBLE_API_KEY
								},
				});

				const data = res.json();

				return data;
}

export default async function Bibles({ params: { bibleId, bookId } }) {
		// Initiate both requests in parallel
		const bookData = getBook(bibleId, bookId);
		const chaptersData = getChapters(bibleId, bookId);

		// Wait for the promises to resolve
		const [book, chapters] = await Promise.all([bookData, chaptersData]);

		console.log(chapters);

  return (
		<div>
			<h1>{book.data.name}</h1>
				<ul>
				{chapters.data.chapters.map((chapter) => ( 
								<li key={chapter.id}>
								<Link href={`/bibles/${bibleId}/books/${bookId}/chapters/${chapter.number}`}>
												{chapter.number}
								</Link>
								</li>
				))}
				</ul>
			<Link href={`/bibles/${bibleId}/`}>← Back</Link>
		</div>
	)
}
