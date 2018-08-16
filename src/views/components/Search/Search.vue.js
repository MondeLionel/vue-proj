import { mapGetters } from "vuex";
import places from "places.js";

export default {
  name: "Search",
  data() {
    return {
      location: "",
      query: ""
    };
  },
  computed: {
    ...mapGetters(["venues"])
  },
  methods: {
    // Use localstore to get recent searches since we will not be using OAuth
    // Allows for saving of places you searched for in an intuitive sort of way

    setRecentSearches() {
      let recentSearches = localStorage.getItem("recentSearches") || [];

      if (typeof recentSearches === "string")
        recentSearches = JSON.parse(recentSearches);
      // localstorage

      if (recentSearches.length > 9) recentSearches.shift();

      recentSearches.push({
        location: this.location,
        query: this.query
      });

      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    },
    fetchVenues() {
      this.setRecentSearches();
      this.$store.dispatch("fetchVenues", {
        location: this.location,
        query: this.query
      });
      this.$router.push({
        path: "venues",
        query: { location: this.location, query: this.query }
      });
    }
  },
  mounted() {
    var placesAutocomplete = places({
      container: document.querySelector("#address-input")
    });
  }
};
