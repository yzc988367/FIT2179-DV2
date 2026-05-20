# Where Australia Is Ageing

A data visualisation project exploring how population ageing differs across Australian cities, regions and remote communities.

**FIT2179 Data Visualisation 2, Monash University — Semester 1, 2026**

## Overview

This single-page scrolling website presents 11 Vega-Lite visualisations and KPI summary cards telling the story of Australia's ageing population:

1. **Australia Is Getting Older** — National trend line, stacked area chart, and headline KPI numbers
2. **Where Older Australians Live** — Choropleth map and proportional symbol map at LGA level
3. **Cities, Regions and Remote Areas Differ** — Top LGAs, state comparison, and remoteness analysis
4. **Not All Older Populations Look the Same** — Age-group composition, box plot of LGA variation, and oldest-old (85+) distribution
5. **What This Means** — Scatter/bubble plot of ageing profiles and three key takeaways

## Data Sources

- **ABS Regional Population by Age and Sex, 2024** — LGA-level population estimates by age group
- **ABS ASGS Edition 3 Digital Boundary Files** — LGA geographic boundaries (TopoJSON)
- **ABS Median Age, Sex Ratio and Broad Age Groups, by LGA, 2024**
- **AIHW Rural and Remote Health, 2023** — Remoteness category data

All data is real, publicly available, and has not been fabricated or estimated.

## Technology

- [Vega-Lite](https://vega.github.io/vega-lite/) for all maps and diagrams
- Vanilla HTML, CSS and JavaScript
- Each Vega-Lite chart in a separate readable `.vg.json` file under `visualisations/`

## Project Structure

```
index.html              Main webpage
style.css               Stylesheet
js/vega_lite_vis.js     Vega-Lite embedding code
visualisations/         11 Vega-Lite .vg.json specification files
data/                   CSVs and TopoJSON
docs/                   Assignment brief, sketch, data source notes
```

## Viewing

Open `index.html` in a browser, or serve via any static web server.

## License

Creative Commons Attribution 4.0 International. Data remains under the respective ABS and AIHW open data terms.

## AI Acknowledgement

This webpage and all Vega-Lite visualisations were developed with the assistance of generative AI (Claude Code, Anthropic). All data sources are real, publicly available datasets. The author reviewed, tested and refined all outputs.
