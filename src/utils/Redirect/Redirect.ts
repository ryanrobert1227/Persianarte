  export default function RedirectTo(num: number, link: string) {
    if(num === 1) {
      return window.location.href = link
    } else if (num === 2) {
      return window.open(link);
    }
  }