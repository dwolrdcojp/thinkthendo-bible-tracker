import Link from 'next/link';

async function getBible(bibleId) {
				const res = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}`, {
								method: 'GET',
								headers: {
												'api-key': process.env.BIBLE_API_KEY
								},
				});

				const data = res.json();

				return data;
}

async function getBooks(bibleId) {
				const res = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/books`, {
								method: 'GET',
								headers: {
												'api-key': process.env.BIBLE_API_KEY
								},
				});

				const data = res.json();

				return data;
}

export default async function Bibles({ params: { bibleId } }) {
		// Initiate both requests in parallel
		const bibleData = getBible(bibleId);
		const booksData = getBooks(bibleId);

		// Wait for the promises to resolve
		const [bible, books] = await Promise.all([bibleData, booksData]);

  return (
		<div>
			<h1>{bible.data.name}</h1>
				<ul>
				{books.data.map((book) => ( 
								<li key={book.id}>
								<Link href={`/bibles/${bibleId}/books/${book.id}`}>
												{book.name}
								</Link>
								</li>
				))}
			</ul>
			<Link href={`/`}>← Back</Link>
		</div>
	)
}
