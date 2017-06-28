function profileProducer(getState) {
  let {layout: {layout: {model: {profiles}}}} = getState();
  let { selectedProfile } = getState();

  return profiles.map((profile) => {
    if (profile.id === selectedProfile) {
      return profile;
    } // TODO: the app will crash if we don't create another action for missing profiles
  })
}

export function createRoutesFromProfile(getState) {
  let { views } = profileProducer(getState);
  let routes = [];
  for (let view of views) {
    routes.push({
      path: view.id,
      component: view.id,
      childRoutes: view.tabs.map((tab) => ({path: tab.id, component: tab.id}))
    })
  }

  return routes;
}

