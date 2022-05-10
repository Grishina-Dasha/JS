function domain_name(url){
        url = url.replace("https://", '');
        url = url.replace("http://", '');
        url = url.replace("www.", '');
        console.log(url.split('.')[0])
}
domain_name("http://google.com") //возвращает "google"
domain_name("http://google.co.jp") //возвращает  "google"
domain_name("www.xakep.ru") //возвращает "xakep"
domain_name("https://youtube.com") //возвращает "youtube"
domain_name("https://www.asos.com") //возвращает "asos"
domain_name("http://www.lenovo.com") //возвращает "lenovo"
domain_name("http://github.com/carbonfive/raygun") //возвращает  "github" 
domain_name("http://www.zombie-bites.com") //возвращает  "zombie-bites"
domain_name("https://www.cnet.com") //возвращает  "cnet"