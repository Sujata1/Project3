export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export function showModal() {
  return {
    type: MODAL_SHOW
  }
}

export function hideModal() {
  return {
    type: MODAL_HIDE
  }
}