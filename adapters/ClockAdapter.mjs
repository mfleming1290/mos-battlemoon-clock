import { defineComponent, h } from 'vue';
import { Clock } from '@battlemoon/clock/vue';
import { defaultClockConfig } from '@battlemoon/clock';

const browserHost = Object.freeze({
  async readTime(_request, cancellation) {
    return cancellation.aborted ? { code: 'cancelled' } : { code: 'success', value: Date.now() };
  },
  schedule(tick, interval) {
    const timer = window.setInterval(tick, interval);
    return () => window.clearInterval(timer);
  },
  reportFailure(result) { console.error('MOS Clock lifecycle', result.code); },
});

// MOS owns placement, package lifetime and durable settings. This wrapper owns no API authority.
export default defineComponent({
  name: 'BattlemoonMosClock',
  props: {
    plugin: Object,
    instanceId: { type: String, default: 'mos-clock-page' },
    config: { type: Object, default: () => defaultClockConfig },
    active: { type: Boolean, default: true },
    host: { type: Object, default: () => browserHost },
  },
  setup(props) {
    return () => h(Clock, { instanceId: props.instanceId, config: props.config, active: props.active, host: props.host });
  },
});
