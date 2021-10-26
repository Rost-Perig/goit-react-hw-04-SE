/* ======= бесконечный скролл - сделан! ======= */

// export function  unlessScroll(obj) {
//     // if (eventsApiService.page >= ref.totalPages - 1) {
//     //   return window.removeEventListener("scroll", throttle(500, () => this.unlessScroll(ref)));
//     // };
//     if(window.pageYOffset + window.innerHeight >= document.getElementById('events').offsetHeight){
//             //загружаем новое содержимое в элемент если предыдущая страница отрендерина
//       if (eventsApiService.page === this.tempMadePage) {
//         eventsApiService.page += 1;
//       this.fetchAndRenderEvents(ref);
//       } else { return };
//     };
//   };