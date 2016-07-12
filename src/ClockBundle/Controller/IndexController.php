<?php

namespace ClockBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
        $time = [];
        $time['Kyiv']= new \DateTimeZone('Europe/kiev');
        $time['London']= new \DateTimeZone('Europe/London');
        $time['Tokyo']= new \DateTimeZone('Asia/Tokyo');
        $time['LosAngeles']= new \DateTimeZone('America/Los_Angeles');

        return $this->render('ClockBundle:Default:index.html.twig', ['time' => $time, 'now' => new \DateTime('now')]);
    }
}
