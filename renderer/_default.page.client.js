import { renderToDom, hydrateDom } from 'some-ui-framework'

export { render }

async function render(pageContext) {
  const { Page } = pageContext

  // SPA:
  await renderToDom(Page)

  // SSR:
  await hydrateDom(Page)
}
