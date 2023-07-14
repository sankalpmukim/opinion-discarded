import { CheckCircleIcon } from "@heroicons/react/20/solid";
import {
  CONCLUSION_HEADING,
  CONCLUSION_P1,
  CONCLUSION_P2,
  CONCLUSION_P3,
  HOW_IMPROVE,
  HOW_IMPROVE_TEXT,
  INTRO,
  LIST_POINTS_IMPROVE,
  LIST_POINTS_NOISE,
  TITLE,
  TOP_TITLE,
  WHEN_HEADING,
  WHEN_NOISE_POST_TEXT,
  WHEN_NOISE_TEXT,
  WHY_ANSWER,
  WHY_QUESTION,
} from "~/components/constants";
import { type ReactNode } from "react";

const SubHeading = ({ children }: { children: ReactNode }) => (
  <p className="text-base font-semibold leading-7 text-indigo-600">
    {children}
  </p>
);

const MainHeading = ({ children }: { children: ReactNode }) => (
  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    {children}
  </h1>
);

const MainHeading2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
    {children}
  </h2>
);

const SubText = ({ children }: { children: ReactNode }) => <p>{children}</p>;
const MainText = ({ children }: { children: ReactNode }) => (
  <p className="mt-6 text-xl leading-8">{children}</p>
);

const AsideText = ({ children }: { children: ReactNode }) => (
  <figure className="mt-10 border-l border-indigo-600 pl-9">
    <blockquote className="font-semibold text-gray-900">
      <p>{children}</p>
    </blockquote>
  </figure>
);

export interface ListPointsType {
  content: string;
  title: string;
}

const ListPoints = ({ points }: { points: ListPointsType[] }) => (
  <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
    {points.map(({ title, content }, index) => (
      <li className="mt-0 flex gap-x-3" key={index}>
        <CheckCircleIcon
          className="mt-1 h-5 w-5 flex-none text-indigo-600"
          aria-hidden="true"
        />
        <span>
          <strong className="font-semibold text-gray-900">{title}</strong>

          <div>{content}</div>
        </span>
      </li>
    ))}
  </ul>
);
export default function Content() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <SubHeading>{TOP_TITLE}</SubHeading>
        <MainHeading>{TITLE}</MainHeading>
        <div className="mt-10 max-w-2xl">
          <SubText>{INTRO}</SubText>
          <MainHeading2>{WHY_QUESTION}</MainHeading2>
          <MainText>{WHY_ANSWER}</MainText>
          <MainHeading2>{WHEN_HEADING}</MainHeading2>
          <MainText>{WHEN_NOISE_TEXT}</MainText>
          <ListPoints points={LIST_POINTS_NOISE} />
          <p className="mt-8">{WHEN_NOISE_POST_TEXT}</p>
          <MainHeading2>{HOW_IMPROVE}</MainHeading2>
          <MainText>{HOW_IMPROVE_TEXT}</MainText>
          <ListPoints points={LIST_POINTS_IMPROVE} />
          <MainHeading2>{CONCLUSION_HEADING}</MainHeading2>
          <MainText>{CONCLUSION_P1}</MainText>
          <MainText>{CONCLUSION_P2}</MainText>
          <AsideText>{CONCLUSION_P3}</AsideText>
        </div>
      </div>
    </div>
  );
}
