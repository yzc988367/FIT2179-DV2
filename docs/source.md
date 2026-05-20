# Data Sources

## ageing_trend.csv
Source: Australian Bureau of Statistics (ABS), Regional population by age and sex, 2024.
Original file: Population estimates by age and sex, by LGA, 2001 to 2024.
Processing: Summed LGA-level population counts by year. Calculated population aged 65+ from 65–69, 70–74, 75–79, 80–84 and 85 and over. Calculated percent_65_plus as pop_65_plus / total_population * 100.
Used for: National ageing trend, KPI cards, older age group trend.

## older_population_lga.csv
Source: Australian Bureau of Statistics (ABS), Regional population by age and sex, 2024.
Original files: Population estimates by age and sex, by LGA, 2024; Median age, sex ratio and broad age groups, by LGA, 2024.
Processing: Cleaned LGA-level persons data, grouped older ages into 65–74, 75–84 and 85+, calculated total aged 65+ and percentage aged 65+.
Used for: LGA choropleth map, top 10 oldest LGAs, state comparison and 85+ LGA ranking.

## australia_lga.topojson
Source: Australian Bureau of Statistics (ABS), ASGS Edition 3 Digital Boundary Files.
Original file: Local Government Areas 2024 Shapefile, GDA2020.
Processing: Simplified in Mapshaper and exported as TopoJSON.
Used for: LGA geographic maps.

## lga_centroids.csv
Source: Derived from ABS LGA boundary data.
Processing: Calculated approximate centroid or representative point for each LGA and joined older population values from older_population_lga.csv.
Used for: Proportional symbol map.

## older_population_remoteness.csv
Source: Australian Institute of Health and Welfare (AIHW), Rural and remote health.
Processing: Extracted explicitly stated percentages of population aged 65+ by remoteness category.
Used for: Remoteness comparison chart.