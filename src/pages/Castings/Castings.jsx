import {
  PageContainer,
  HeroSection,
  HeroTitle,
  HeroText,
  SearchContainer,
  SearchInput,
  FilterRow,
  FilterButton,
  CastingsGrid,
  CastingCard,
  CastingImage,
  CastingOverlay,
  CastingContent,
  CastingTop,
  CastingCategory,
  CastingStatus,
  CastingTitle,
  CastingDescription,
  CastingInfo,
  InfoItem,
  CastingFooter,
  ApplyButton,
  Deadline,
} from "./CastingsStyles";

const castings = [
  {
    id: 1,
    title: "Casting para Serie Juvenil",
    category: "ACTUACIÓN",
    status: "ABIERTO",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    description:
      "Buscamos actores y actrices entre 18 y 25 años para nueva producción streaming.",
    location: "Buenos Aires",
    payment: "$250.000",
    deadline: "Cierra en 5 días",
  },
  {
    id: 2,
    title: "Campaña de Moda Urbana",
    category: "MODELING",
    status: "URGENTE",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    description:
      "Marca internacional busca modelos para campaña publicitaria 2026.",
    location: "Mar del Plata",
    payment: "$400.000",
    deadline: "Cierra mañana",
  },
  {
    id: 3,
    title: "Show Musical en Vivo",
    category: "MÚSICA",
    status: "ABIERTO",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    description:
      "Se buscan cantantes y músicos para espectáculo en teatro principal.",
    location: "Córdoba",
    payment: "$300.000",
    deadline: "Cierra en 10 días",
  },
];

const Castings = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>
          ENCONTRÁ
          <br />
          CASTINGS
        </HeroTitle>

        <HeroText>
          Descubrí oportunidades reales en producciones audiovisuales, moda,
          música, teatro y publicidad.
        </HeroText>

        <SearchContainer>
          <SearchInput placeholder="Buscar castings..." />
        </SearchContainer>

        <FilterRow>
          <FilterButton active>TODOS</FilterButton>
          <FilterButton>ACTUACIÓN</FilterButton>
          <FilterButton>MODELOS</FilterButton>
          <FilterButton>MÚSICA</FilterButton>
          <FilterButton>DANZA</FilterButton>
        </FilterRow>
      </HeroSection>

      <CastingsGrid>
        {castings.map((casting) => (
          <CastingCard key={casting.id}>
            <CastingImage src={casting.image} alt={casting.title} />

            <CastingOverlay />

            <CastingContent>
              <CastingTop>
                <CastingCategory>{casting.category}</CastingCategory>

                <CastingStatus>
                  {casting.status}
                </CastingStatus>
              </CastingTop>

              <div>
                <CastingTitle>{casting.title}</CastingTitle>

                <CastingDescription>
                  {casting.description}
                </CastingDescription>
              </div>

              <CastingInfo>
                <InfoItem>📍 {casting.location}</InfoItem>

                <InfoItem>💰 {casting.payment}</InfoItem>
              </CastingInfo>

              <CastingFooter>
                <Deadline>{casting.deadline}</Deadline>

                <ApplyButton>POSTULARME</ApplyButton>
              </CastingFooter>
            </CastingContent>
          </CastingCard>
        ))}
      </CastingsGrid>
    </PageContainer>
  );
};

export default Castings;