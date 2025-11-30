// src/components/GithubActivity.tsx
import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "inha-dev"; // 필요하면 실제 계정으로 변경

interface GithubEvent {
  id: string;
  type: string;
  repo?: { name: string };
  created_at: string;
}

export default function GithubActivity() {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "empty" | "error"
  >("idle");

  useEffect(() => {
    async function fetchEvents() {
      try {
        setStatus("loading");

        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=5`
        );

        if (!res.ok) {
          // 콘솔에 시끄러운 에러 찍지 말고 조용히 빈 상태 처리
          setStatus("empty");
          return;
        }

        const data: GithubEvent[] = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          setStatus("empty");
          return;
        }

        setEvents(data);
        setStatus("idle");
      } catch {
        setStatus("error");
      }
    }

    fetchEvents();
  }, []);

  if (status === "loading") {
    return (
      <p className="text-xs text-muted-foreground">
        GitHub activity loading…
      </p>
    );
  }

  if (status === "error" || status === "empty") {
    return (
      <p className="text-xs text-muted-foreground">
        GitHub 활동 데이터는 데모용으로 비워두었습니다.
      </p>
    );
  }

  return (
    <div className="space-y-2 text-xs text-muted-foreground">
      {events.map((event) => (
        <div key={event.id} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
          <span className="truncate">
            {event.type.replace("Event", "")} ·{" "}
            {event.repo?.name ?? "repository"}
          </span>
        </div>
      ))}
    </div>
  );
}
