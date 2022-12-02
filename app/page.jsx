import Link from 'next/link';
//comment
async function getBibles() {
				const res = await fetch('https://api.scripture.api.bible/v1/bibles', {
								cache: 'no-store',
								method: 'GET',
								headers: {
												'api-key': process.env.BIBLE_API_KEY
								},
				});

				const data = res.json();

				return data;
}

export default async function Home() {
		const bibles = await getBibles();

		const englishBibles = bibles.data?.filter((bible) => 
								bible.language.name === 'English' );

  return (
						<div>
								<h1>ThinkThenDo's Bible Tracker - Powered by God.</h1>
								<h2> Let me see the light in a world without Logos.</h2>
								<h1>List of English Bibles</h1>
										<ul>
										{englishBibles?.map((bible) => ( 
														<li key={bible.id}>
																<Link href={`/bibles/${bible.id}`}>
																				{bible.name}{' - '} 
																				{bible.language.name}
																</Link>
														</li>
										))}
										</ul>
						</div> 
  )
}
