'use client'

import React from 'react';
import Maha from '../components/Maha'
import About from '../components/About'
import Skill from '../components/Skill'
import Qualification from '../components/Qualification'
import Contact from '../components/Contact'
import Projects from '@/components/Projects'
import Certifications from '../components/certifications';


export default function Home() {

  return (
    <>
      <section id="home"><Maha /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="qualification"><Qualification /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>


    </>
  );
}