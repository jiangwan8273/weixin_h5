const Cs = [
  {
    path: '/cs',
    name: 'cs',
    component: () => import('@/views/CS/CsIndex.vue'),
    children: [
      {
        path: 'backpage',
        name: 'BackPage',
        component: () => import('@/views/CS/BackPage.vue')
      }
    ]
  }
]
export default Cs