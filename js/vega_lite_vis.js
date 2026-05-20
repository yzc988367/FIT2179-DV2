var visConfig = [
  { id: "vis2",  file: "visualisations/v2_national_trend_line.vg.json" },
  { id: "vis3",  file: "visualisations/v3_age_group_stacked_area.vg.json" },
  { id: "vis4",  file: "visualisations/v4_choropleth_map.vg.json" },
  { id: "vis5",  file: "visualisations/v5_proportional_symbol_map.vg.json" },
  { id: "vis6",  file: "visualisations/v6_top_lgas_bar.vg.json" },
  { id: "vis7",  file: "visualisations/v7_state_dot_plot.vg.json" },
  { id: "vis8",  file: "visualisations/v8_remoteness_chart.vg.json" },
  { id: "vis9",  file: "visualisations/v9_state_age_groups.vg.json" },
  { id: "vis10", file: "visualisations/v10_box_plot.vg.json" },
  { id: "vis11", file: "visualisations/v11_top_85plus_bar.vg.json" },
  { id: "vis12", file: "visualisations/v12_scatter_bubble.vg.json" }
];

var opt = { actions: false, renderer: "svg" };

visConfig.forEach(function (spec) {
  var el = document.getElementById(spec.id);
  if (el) {
    vegaEmbed("#" + spec.id, spec.file, opt).catch(function (err) {
      console.error("Vega-Embed error for " + spec.id + ":", err);
      el.innerHTML =
        "<p class=\"chart-error\">Unable to load chart. Please check that all data files are accessible.</p>";
    });
  }
});
