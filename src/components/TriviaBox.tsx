"use client";

import { useState, useCallback } from "react";
import { triviaQuestions } from "@/data/trivia";
import { Trophy, RotateCcw } from "lucide-react";

function getRandomIndex(exclude?: number): number {
  let idx: number;
  do {
    idx = Math.floor(Math.random() * triviaQuestions.length);
  } while (idx === exclude && triviaQuestions.length > 1);
  return idx;
}

export function TriviaBox() {
  const [questionIndex, setQuestionIndex] = useState(() => getRandomIndex());
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);

  const question = triviaQuestions[questionIndex];

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (selectedAnswer !== null) return;
      setSelectedAnswer(optionIndex);
      setTotal((t) => t + 1);
      if (optionIndex === question.correctIndex) {
        setCorrect((c) => c + 1);
      }
    },
    [selectedAnswer, question.correctIndex]
  );

  const nextQuestion = useCallback(() => {
    setQuestionIndex((prev) => getRandomIndex(prev));
    setSelectedAnswer(null);
  }, []);

  const resetScore = useCallback(() => {
    setCorrect(0);
    setTotal(0);
    setQuestionIndex(getRandomIndex(questionIndex));
    setSelectedAnswer(null);
  }, [questionIndex]);

  const answered = selectedAnswer !== null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 rounded-3xl border border-amber-500/30 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-red-500/5" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="relative p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Trophy className="text-amber-400" size={24} />
              </div>
              <div>
                <h2
                  className="text-3xl md:text-4xl font-black text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  TEST YOUR 49ERS KNOWLEDGE
                </h2>
                <p className="text-stone-400 text-sm">
                  How well do you know the Niners?
                </p>
              </div>
            </div>

            {total > 0 && (
              <div className="flex items-center gap-3">
                <div className="bg-stone-800 px-4 py-2 rounded-lg border border-stone-700">
                  <span className="text-stone-400 text-sm">Score: </span>
                  <span className="text-amber-400 font-bold text-lg">
                    {correct}/{total}
                  </span>
                </div>
                <button
                  onClick={resetScore}
                  className="p-2 bg-stone-800 rounded-lg border border-stone-700 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
                  title="Reset score"
                >
                  <RotateCcw size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Question */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
              {question.question}
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {question.options.map((option, i) => {
              let style =
                "bg-stone-800/80 border-stone-700 text-stone-200 hover:bg-stone-700 hover:border-stone-600";

              if (answered) {
                if (i === question.correctIndex) {
                  style =
                    "bg-green-500/20 border-green-500/50 text-green-300";
                } else if (i === selectedAnswer) {
                  style = "bg-red-500/20 border-red-500/50 text-red-300";
                } else {
                  style =
                    "bg-stone-800/40 border-stone-800 text-stone-500";
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                  className={`p-4 rounded-xl border text-left font-medium transition-all duration-300 ${style} ${
                    !answered ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <span className="text-stone-500 mr-3 font-mono text-sm">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Feedback + Next */}
          {answered && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-800">
              <p
                className={`text-lg font-semibold ${
                  selectedAnswer === question.correctIndex
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {selectedAnswer === question.correctIndex
                  ? "Correct! Nice work, Niner Faithful!"
                  : `Wrong! The answer is: ${question.options[question.correctIndex]}`}
              </p>
              <button
                onClick={nextQuestion}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-900 font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
