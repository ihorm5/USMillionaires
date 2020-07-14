import $ from 'jquery';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries.js';
import 'jquery-mapael/js/maps/usa_states.js';


$(".mapcontainer").mapael({
  map: {
    name: "usa_states"
  },
  areas: {"NJ": {"value": 9.76, "href": "#", "tooltip": {"content": "<span>New Jersey: 9.76</span>"}}, "FL": {"value": 5.87, "href": "#", "tooltip": {"content": "<span>Florida: 5.87</span>"}}, "MD": {"value": 9.72, "href": "#", "tooltip": {"content": "<span>Maryland: 9.72</span>"}}, "NE": {"value": 5.86, "href": "#", "tooltip": {"content": "<span>Nebraska: 5.86</span>"}}, "CT": {"value": 9.44, "href": "#", "tooltip": {"content": "<span>Connecticut: 9.44</span>"}}, "WI": {"value": 5.83, "href": "#", "tooltip": {"content": "<span>Wisconsin: 5.83</span>"}}, "MA": {"value": 9.38, "href": "#", "tooltip": {"content": "<span>Massachusetts: 9.38</span>"}}, "KS": {"value": 5.81, "href": "#", "tooltip": {"content": "<span>Kansas: 5.81</span>"}}, "HI": {"value": 9.2, "href": "#", "tooltip": {"content": "<span>Hawaii: 9.2</span>"}}, "IA": {"value": 5.71, "href": "#", "tooltip": {"content": "<span>Iowa: 5.71</span>"}}, "NV": {"value": 5.61, "href": "#", "tooltip": {"content": "<span>Nevada: 5.61</span>"}}, "CA": {"value": 8.51, "href": "#", "tooltip": {"content": "<span>California: 8.51</span>"}}, "ME": {"value": 5.6, "href": "#", "tooltip": {"content": "<span>Maine: 5.6</span>"}}, "NH": {"value": 8.47, "href": "#", "tooltip": {"content": "<span>New Hampshire: 8.47</span>"}}, "OH": {"value": 5.54, "href": "#", "tooltip": {"content": "<span>Ohio: 5.54</span>"}}, "VA": {"value": 8.31, "href": "#", "tooltip": {"content": "<span>Virginia: 8.31</span>"}}, "WY": {"value": 5.45, "href": "#", "tooltip": {"content": "<span>Wyoming: 5.45</span>"}}, "AK": {"value": 8.18, "href": "#", "tooltip": {"content": "<span>Alaska: 8.18</span>"}}, "NC": {"value": 5.45, "href": "#", "tooltip": {"content": "<span>North Carolina: 5.45</span>"}}, "WA": {"value": 7.85, "href": "#", "tooltip": {"content": "<span>Washington: 7.85</span>"}}, "SC": {"value": 5.4, "href": "#", "tooltip": {"content": "<span>South Carolina: 5.4</span>"}}, "NY": {"value": 7.52, "href": "#", "tooltip": {"content": "<span>New York: 7.52</span>"}}, "MO": {"value": 5.39, "href": "#", "tooltip": {"content": "<span>Missouri: 5.39</span>"}}, "CO": {"value": 7.48, "href": "#", "tooltip": {"content": "<span>Colorado: 7.48</span>"}}, "IN": {"value": 5.34, "href": "#", "tooltip": {"content": "<span>Indiana: 5.34</span>"}}, "MN": {"value": 7.43, "href": "#", "tooltip": {"content": "<span>Minnesota: 7.43</span>"}}, "SD": {"value": 5.33, "href": "#", "tooltip": {"content": "<span>South Dakota: 5.33</span>"}}, "IL": {"value": 7.13, "href": "#", "tooltip": {"content": "<span>Illinois: 7.13</span>"}}, "MT": {"value": 5.28, "href": "#", "tooltip": {"content": "<span>Montana: 5.28</span>"}}, "UT": {"value": 7.05, "href": "#", "tooltip": {"content": "<span>Utah: 7.05</span>"}}, "TN": {"value": 5.21, "href": "#", "tooltip": {"content": "<span>Tennessee: 5.21</span>"}}, "DE": {"value": 6.98, "href": "#", "tooltip": {"content": "<span>Delaware: 6.98</span>"}}, "ID": {"value": 5.14, "href": "#", "tooltip": {"content": "<span>Idaho: 5.14</span>"}}, "RI": {"value": 6.69, "href": "#", "tooltip": {"content": "<span>Rhode Island: 6.69</span>"}}, "NM": {"value": 4.97, "href": "#", "tooltip": {"content": "<span>New Mexico: 4.97</span>"}}, "PA": {"value": 6.44, "href": "#", "tooltip": {"content": "<span>Pennsylvania: 6.44</span>"}}, "OK": {"value": 4.9, "href": "#", "tooltip": {"content": "<span>Oklahoma: 4.9</span>"}}, "OR": {"value": 6.43, "href": "#", "tooltip": {"content": "<span>Oregon: 6.43</span>"}}, "AL": {"value": 4.87, "href": "#", "tooltip": {"content": "<span>Alabama: 4.87</span>"}}, "TX": {"value": 6.32, "href": "#", "tooltip": {"content": "<span>Texas: 6.32</span>"}}, "LA": {"value": 4.81, "href": "#", "tooltip": {"content": "<span>Louisiana: 4.81</span>"}}, "VT": {"value": 6.29, "href": "#", "tooltip": {"content": "<span>Vermont: 6.29</span>"}}, "KY": {"value": 4.69, "href": "#", "tooltip": {"content": "<span>Kentucky: 4.69</span>"}}, "ND": {"value": 6.16, "href": "#", "tooltip": {"content": "<span>North Dakota: 6.16</span>"}}, "AR": {"value": 4.33, "href": "#", "tooltip": {"content": "<span>Arkansas: 4.33</span>"}}, "GA": {"value": 6.07, "href": "#", "tooltip": {"content": "<span>Georgia: 6.07</span>"}}, "WV": {"value": 4.21, "href": "#", "tooltip": {"content": "<span>West Virginia: 4.21</span>"}}, "AZ": {"value": 6.03, "href": "#", "tooltip": {"content": "<span>Arizona: 6.03</span>"}}, "MS": {"value": 4.18, "href": "#", "tooltip": {"content": "<span>Mississippi: 4.18</span>"}}, "MI": {"value": 5.97, "href": "#", "tooltip": {"content": "<span>Michigan: 5.97</span>"}}},
  legend: {
    area: {
      title: "Percentage of US millionaires by state",
      slices: [
        {
          max: 5,
          attrs: {
            fill: "#97e766"
          },
          label: "Less than 4%"
        },
        {
          min: 5.,
          max: 6,
          attrs: {
            fill: "#7fd34d"
          },
          label: "Between 5% and 6%"
        },
        {
          min: 6.0,
          max: 7,
          attrs: {
            fill: "#5faa32"
          },
          label: "Between 6.0% and 6.75%"
        },
        {
          min: 7,
          max: 9,
          attrs: {
            fill: "#3f7d1a"
          },
          label: "Between 6.75% and 7.5%"
        },
        {
          min: 9,
          attrs: {
            fill: "red"
          },
          label: "Higher than 9%"
        }
      ]
    }
  },

});


$('.map').on('usmapclick', function (event, data) {
  console.log('Clicked on', data);
});
