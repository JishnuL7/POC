import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { RootProps, RootState } from './root.model';
import { rootService } from './root.service';
import './root.css';

useMetadata({ isAttachedToShadowDom: true });

export default function Root(props: RootProps) {
  const state = useStore<RootState>({
    loaded: false,
    classes: { base: '' }
  });

  onMount(() => {
    state.loaded = true;
    state.classes = rootService.getClasses(props.className);
  });

  return (
    <Show when={state.loaded}>
      <div class={state.classes.base}>
        <div class={`uxdl-progress__root--bar ${props.rounded ? 'uxdl__border-radius--' + props.rounded : ''}`}>
          {props.children}
        </div>
      </div>
    </Show>
  );
}
