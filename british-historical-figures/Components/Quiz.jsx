/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"


const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleButtonClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <>
     <Card className="bg-slate-500 h-full  border border-black rounded-lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    </>
  );
};

export default Quiz;


