import {
  PageContainer,
  HeroSection,
  HeroTitle,
  HeroText,
  SearchBar,
  FilterContainer,
  FilterButton,
  ArtistsGrid,
  ArtistCard,
  ArtistImage,
  ArtistOverlay,
  ArtistInfo,
  ArtistName,
  ArtistRole,
  ArtistTags,
  Tag,
  Stats,
  StatBox,
  FollowButton,
} from "./ArtistasStyled";
import { useNavigate } from "react-router-dom";

const artists = [
  {
    id: 1,
    name: "Sofía Martínez",
    role: "Actriz & Modelo",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    tags: ["Actuación", "Moda", "Publicidad"],
  },
  {
    id: 2,
    name: "Lucas Medina",
    role: "Bailarín Urbano",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    tags: ["Hip-Hop", "Coreografía"],
  },
  {
    id: 3,
    name: "Valentina Cruz",
    role: "Cantante",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    tags: ["Pop", "Shows", "Eventos"],
  },
  {
    id: 4,
    name: "Tomás Vega",
    role: "Actor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Cine", "Teatro"],
  },
];

const Artistas = () => {
const navigate = useNavigate();
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>
          DESCUBRÍ
          <br />
          TALENTOS
        </HeroTitle>

        <HeroText>
          Explorá perfiles profesionales, encontrá artistas para tus proyectos
          y conectá directamente con talentos de distintas disciplinas.
        </HeroText>

        <SearchBar placeholder="Buscar artistas..." />

        <FilterContainer>
          <FilterButton active>TODOS</FilterButton>
          <FilterButton>ACTORES</FilterButton>
          <FilterButton>MODELOS</FilterButton>
          <FilterButton>BAILARINES</FilterButton>
          <FilterButton>MÚSICOS</FilterButton>
        </FilterContainer>
      </HeroSection>

      <ArtistsGrid>
        {artists.map((artist) => (
          <ArtistCard key={artist.id}>
            <ArtistImage src={artist.image} alt={artist.name} />

            <ArtistOverlay />

            <ArtistInfo>
              <div>
                <ArtistName>{artist.name}</ArtistName>
                <ArtistRole>{artist.role}</ArtistRole>

                <ArtistTags>
                  {artist.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ArtistTags>
              </div>

              <Stats>
                <StatBox>
                  <h4>12K</h4>
                  <span>Seguidores</span>
                </StatBox>

                

<FollowButton onClick={() => navigate(`/artistas/${artist.id}`)}>
  VER PERFIL
</FollowButton>
              </Stats>
            </ArtistInfo>
          </ArtistCard>
        ))}
      </ArtistsGrid>
    </PageContainer>
  );
};



export default Artistas;