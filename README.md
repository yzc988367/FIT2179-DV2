# Where Australia Is Ageing

A FIT2179 Data Visualisation 2 project exploring how population ageing differs across Australian cities, regions and remote communities.

Author: Yuanzhe Chen  
Date: May 2026  
Unit: FIT2179 Data Visualisation 2, Monash University, Semester 1, 2026

## Overview

This single-page scrolling website presents 11 Vega-Lite visualisations and KPI summary cards:

1. Australia Is Getting Older - national trend line, stacked area chart, and headline KPI numbers
2. Where Older Australians Live - LGA choropleth map and proportional symbol map
3. Cities, Regions and Remote Areas Differ - top LGAs, state comparison, and remoteness analysis
4. Not All Older Populations Look the Same - age-group composition, LGA variation, and oldest-old distribution
5. What This Means - bubble/scatter plot and three key takeaways

## Data Sources

- ABS Regional Population by Age and Sex, 2024
- ABS ASGS Edition 3 Digital Boundary Files, 2024
- ABS Median Age, Sex Ratio and Broad Age Groups, by LGA, 2024
- AIHW Rural and Remote Health, 2023

All data is real, publicly available, and has not been fabricated or estimated.

## Technology

- Vega-Lite for all maps and charts
- Vanilla HTML, CSS and JavaScript
- Each Vega-Lite chart is stored as a separate readable `.vg.json` file in `visualisations/`
- Relative paths are used so the website can run on GitHub Pages

## Project Structure

```text
index.html              Main webpage
style.css               Stylesheet
js/vega_lite_vis.js     Vega-Lite embedding code
visualisations/         11 Vega-Lite .vg.json specification files
data/                   CSVs and TopoJSON
docs/                   Assignment brief, sketch, and data source notes
```

## Viewing

Serve the folder with a static web server and open `index.html`. A local server is recommended because some browsers block `file://` data loading.

## AI Acknowledgement

This webpage and Vega-Lite visualisations were developed with generative AI assistance. The author reviewed, tested and refined the outputs. All data used is from the listed ABS and AIHW sources; no values were fabricated.
