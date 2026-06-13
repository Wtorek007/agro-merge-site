export const analysisCategories = {
  mikro: {
    label: "Mikroekonomia",
    description: "Analizy na poziomie gospodarstwa, uprawy i produktu rolnego.",
  },
  makro: {
    label: "Makroekonomia",
    description: "Trendy rynkowe, polityka rolna, inflacja i handel globalny.",
  },
  ceny: {
    label: "Ceny bieżące",
    description: "Aktualne notowania, indeksy i ceny hurtowe produktów rolnych.",
  },
  prognoza: {
    label: "Prognozy",
    description: "Predykcje cen i popytu na horyzont 2, 3 i 5 lat.",
  },
} as const;

export type AnalysisCategory = keyof typeof analysisCategories;

export const forecastHorizons = {
  "2y": "2 lata",
  "3y": "3 lata",
  "5y": "5 lat",
} as const;

export type ForecastHorizon = keyof typeof forecastHorizons;
