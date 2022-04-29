import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import './style.css'

export default function Filme() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "9c4f8975349f627f11cfe07078c55525",
                    language: "pt-BR"
                }

            })
                .then((response) => {
                    setFilme(response.data)
                    setLoading(false)
                })
                .catch(() => {
                    console.log("erro")
                    navigate("/", { replace: true })
                    return;
                })
        }
        loadFilme()

        return () => {
            console.log("component desmontado")
        }

    }, [navigate, id])
    function salvarFilme() {
        const minhaLista = localStorage.getItem("@PrimeFlix")
        let FilmesSalvos = JSON.parse(minhaLista) || []
        const HasFilme = FilmesSalvos.some((FilmesSalvos) => FilmesSalvos.id === filme.id)

        if (HasFilme) {
            toast.error("Filme ja está salvo")
            return
        }
        FilmesSalvos.push(filme)
        localStorage.setItem("@PrimeFlix", JSON.stringify(FilmesSalvos))
        toast.success("Filme salvo com sucesso")
    }
    if (loading) {
        return (
            <div className="filme-info">
                <h1>carregando filme</h1>
            </div>
        )
    }
    return (
        <div className="filme-info">
            <h1>{`${filme.title} | (${filme.release_date})`}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação : {filme.vote_average}/10 </strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} target="blank" rel='external'>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}