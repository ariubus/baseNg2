using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Import.WebClient.Controllers
{
    public class AppController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult App()
        {
            return PartialView();
        }

        public ActionResult TopHeader()
        {
            return PartialView(); 
        }

        public ActionResult Footer()
        {
            return PartialView();
        }


        public ActionResult CustomerList()
        {
            return PartialView();
        }

        public ActionResult CustomerDetails()
        {
            return PartialView();
        }

        public ActionResult About()
        {
            return PartialView();
        }

    }
}
