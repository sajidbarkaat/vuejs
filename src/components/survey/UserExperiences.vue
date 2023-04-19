<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchSurveys()"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  created() {
    this.fetchSurveys();
  },
  data() {
    return {
      results: [],
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    fetchSurveys() {
      fetch(
        'https://vue-http-demo-39ae2-default-rtdb.firebaseio.com/SurveyResults.json'
      )
        .then((response) => response.json())
        .then((data) => {
          for (let key in data) {
            this.results.push({
              id: data[key].id,
              name: data[key].name,
              rating: data[key].rating,
            });
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
