import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { getPokemonDetailApi } from '../utils/api/pokemonApi'
import { API_HOST } from '../utils/constants'
import { mappedPokemonData } from '../utils/mappedPokemonData'

export const usePokemonDetail = (pokemonId) => {
	const [pokemonDetails, setPokemonDetails] = useState({})
	const navigator = useNavigation()

	const getPokemonDetails = async (id) => {
		try {
			const result = await getPokemonDetailApi(
				`${API_HOST}/pokemon/${pokemonId}`
			)
			setPokemonDetails(mappedPokemonData(result))
		} catch (error) {
			navigator.goBack()
		}
	}

	useEffect(() => {
		getPokemonDetails()
	}, [])

	return { pokemonDetails }
}
