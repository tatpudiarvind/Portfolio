import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
  readonly year = new Date().getFullYear();
  readonly experienceRotationIntervalMs = 3000;

  readonly experiences = [
    {
      company: "SIEMENS HEALTHINEERS",
      location: "Bengaluru, India",
      dates: "Nov 2024 – Present",
      title: "Senior Software Developer",
      summary:
        "Builds backend services, delivery pipelines and AI developer tools for healthcare software.",
      responsibilities: [
        "Cut code review time by 70% and made defect analysis three times faster for my team, with a Copilot review agent and MCP-based defect analysis tools.",
        "Shortened release time for a software-distribution service from a day to 40 minutes by co-building five Azure DevOps pipelines through to Kubernetes.",
        "Raised pipeline pass rate from 65% to 95%+ by root-causing seven classes of build and deploy failure, and lifted the SonarQube security rating from D to A.",
        "Keep thousands of medical devices current in a cloud registry, delivering 99.5%+ of queued updates, and made key queries 10× faster.",
        "Building a case-processing feature end to end in Go on Kubernetes (in progress).",
      ],
    },
    {
      company: "HAPPIEST MINDS TECHNOLOGIES",
      location: "Bengaluru, India",
      dates: "Nov 2022 – Nov 2024",
      title: "Senior Software Engineer",
      summary:
        "Worked on application modernization, enterprise knowledge tools and touch-interface software.",
      responsibilities: [
        "Cut the time to find an answer in 580 administrative and legal documents from 15 minutes to 10 seconds for 1,500 users, with an enterprise RAG assistant.",
        "Moved a Windows desktop application to the browser for 10,000+ users, migrating 90% of its modules to Angular 13 and ASP.NET Web API; rollouts went from 2 weeks to the same day.",
        "Built touch-interface navigation that cut steps for core tasks from 13 to 4, and WPF middleware components reused across 8 screens.",
      ],
    },
    {
      company: "OPTION MATRIX INFOTECH",
      location: "Hyderabad, India",
      dates: "Oct 2020 – Nov 2022",
      title: "Software Developer",
      summary:
        "Built workflow automation for an overseas career-consulting and immigration firm.",
      responsibilities: [
        "Cut audit turnaround from 4 days to 6 hours with an end-to-end audit automation platform in C#, ASP.NET Web API, SQL Server and Angular.",
        "Cut audit rework by 30% by digitising checklists and Q&A modules with mobile app integration.",
        "Brought response to audit exceptions down from 3 days to the same day with automated ticketing and SendGrid alerts, handling 250+ tickets a month.",
      ],
    },
  ] as const;

  activeExperienceIndex = 0;
  isAutoRotationEnabled = true;
  isExperienceHovered = false;
  isExperienceFocused = false;
  private rotationTimer: number | undefined;

  ngOnInit(): void {
    this.isAutoRotationEnabled = !window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    this.rotationTimer = window.setInterval(() => {
      if (
        !this.isAutoRotationEnabled ||
        this.isExperienceHovered ||
        this.isExperienceFocused ||
        document.visibilityState !== "visible" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      this.nextExperience();
    }, this.experienceRotationIntervalMs);
  }

  ngOnDestroy(): void {
    if (this.rotationTimer !== undefined) {
      window.clearInterval(this.rotationTimer);
    }
  }

  toggleAutoRotation(): void {
    this.isAutoRotationEnabled = !this.isAutoRotationEnabled;
  }

  syncExperienceFocus(event: FocusEvent): void {
    const carousel = event.currentTarget;
    if (!(carousel instanceof HTMLElement)) return;

    this.isExperienceFocused = carousel.contains(
      event.relatedTarget instanceof Node ? event.relatedTarget : null,
    );
  }

  showExperience(index: number): void {
    this.activeExperienceIndex =
      (index + this.experiences.length) % this.experiences.length;
  }

  previousExperience(): void {
    this.showExperience(this.activeExperienceIndex - 1);
  }

  nextExperience(): void {
    this.showExperience(this.activeExperienceIndex + 1);
  }

  syncDisclosure(event: Event): void {
    const details = event.currentTarget;
    if (!(details instanceof HTMLDetailsElement)) return;

    const summary = details.querySelector("summary");
    const indicator = summary?.querySelector("[data-disclosure-indicator]");
    if (!summary || !(indicator instanceof HTMLElement)) return;

    summary.setAttribute("aria-expanded", String(details.open));
    indicator.textContent = details.open ? "−" : "＋";
  }
}
