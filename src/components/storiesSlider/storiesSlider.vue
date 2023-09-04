<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories" ref="slider">
        <li class="stories-item" v-for="(trending, ndx) in trendings" :key="trending.id" ref="item">
          <slide :data="getStoryData(trending)" :active="slideNdx === ndx" :loading="slideNdx === ndx && loading"
            :btnsShown="activeBtns" @onNextSlide="handleSlider(ndx + 1)" @onPrevSlide="handleSlider(ndx - 1)"
            @onProgressFinish="handleSlider(ndx + 1)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slide } from '../slide'
import { mapState, mapActions } from 'vuex';
// const { mapState, mapActions, mapGetters } = createNamespacedHelpers('trendings');

export default {
  name: 'storiesSlider',
  components: {
    slide
  },
  props: {
    initialSlide: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShow: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns() {
      // if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userName: obj.owner?.login,
        content: obj.readme
      }
    },
    async fetchReadmeForActiveSlide() {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    moveSlider(slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(item[0]).getPropertyValue('width'), 10)
      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme() {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlider(slideNdx) {
      if (slideNdx <= 9) {
        this.moveSlider(slideNdx)
        await this.loadReadme()
      }
    }
  },
  async mounted() {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
      await this.handleSlider(ndx)
    }
    await this.fetchTrendings()
    await this.loadReadme()
  }
}
</script>

<style scoped lang="scss" src="./storiesSlider.scss"></style>
