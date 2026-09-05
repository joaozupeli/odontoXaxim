<template>
  <section class="team section" :id="sectionId" ref="rootRef">
    <div class="shell">
      <ChapterHeader
        :index="index"
        eyebrow="Equipe"
        :title="title"
        :subtitle="subtitle"
        :note="`${visibleTeam.length} pessoas`"
      />

      <div class="team__grid" ref="gridRef">
        <TeamCard
          v-for="(member, i) in visibleTeam"
          :key="member.id"
          :member="member"
          :index="i"
          @open="openModal"
        />
      </div>

      <div v-if="showCta" class="stack team__cta js-reveal" ref="ctaRef">
        <CtaButton to="/equipe" variant="ghost">Conhecer o time completo</CtaButton>
        <CtaButton :href="whatsappHref" variant="primary" arrow>
          Falar com a recepção
        </CtaButton>
      </div>
    </div>

    <TeamModal :member="activeMember" @close="activeMember = null" />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ChapterHeader from '../ui/ChapterHeader.vue'
import CtaButton from '../ui/CtaButton.vue'
import TeamCard from './TeamCard.vue'
import TeamModal from './TeamModal.vue'
import { clinic, team } from '../../data/clinic'
import { useWhatsApp } from '../../composables/useWhatsApp'
import { revealStagger, revealUp } from '../../animations/motion'
import { useMotion } from '../../composables/useMotion'

const props = defineProps({
  sectionId: { type: String, default: 'equipe' },
  index: { type: String, default: '03' },
  title: { type: String, default: 'Quem cuida de você' },
  subtitle: {
    type: String,
    default:
      'Dentistas e recepção no mesmo endereço. Você escolhe com quem quer falar.',
  },
  limit: { type: Number, default: 0 },
  showCta: { type: Boolean, default: true },
})

const visibleTeam = computed(() =>
  props.limit > 0 ? team.slice(0, props.limit) : team,
)

const { href: whatsappHref } = useWhatsApp(
  clinic.whatsapp,
  clinic.whatsappDefaultMessage,
)

const rootRef = ref(null)
const gridRef = ref(null)
const ctaRef = ref(null)
const activeMember = ref(null)

function openModal(member) {
  activeMember.value = member
}

useMotion(() => {
  revealStagger(gridRef.value, '.team-card', { y: 36, stagger: 0.08 })
  revealUp(ctaRef.value, { y: 20 })
}, rootRef)
</script>

<style scoped>
.team__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 2.5vw, 1.5rem);
}

@media (min-width: 640px) {
  .team__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .team__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.team__cta {
  margin-top: clamp(2.5rem, 5vw, 4rem);
}
</style>
