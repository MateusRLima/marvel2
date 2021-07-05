import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './HeroList.css'
import md5 from 'md5'

const HeroList = () => {

	const [heroes, setHeroes] = useState([])

	useEffect(() => {

		const timestamp = Date.now()
  	const publicKey = '661772f1f3354e0effb6198047ae329b'
  	const privateKey = '908b1efe444b5b85579fca43fab4602ec5532c7a'
  	let hash = `${timestamp}${privateKey}${publicKey}`
  	hash = md5(hash)

		const getHeroes = () => {
			axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=10`)
			.then(res => {
				setHeroes(res.data.data.results)
			})
		}

		getHeroes()

	}, [])

	return (
		<div >
			<table className="hero-table">
				<thead>
					<tr>
						<th className="text-uppercase hero-table-header">
							Personagem
						</th>
						<th className="text-uppercase hero-table-header">
							Série
						</th>
					</tr>
				</thead>
				<tbody className="hero-table-body">
					{heroes.map(hero => (
						<tr key={hero.id} className="hero-table-row">
							<td className="hero-table-name">
								<img className="rounded float-left" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='Retrato do heroi' width='50px' height='50px'/>
								<span>{hero.name}</span>
							</td>
							<td className="hero-table-serie">
								<span>{hero.name}</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default HeroList
