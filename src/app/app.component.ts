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
      title: "Senior Software Developer | C#/.NET",
      summary:
        "Develops healthcare software across device-data services, medical imaging, printing workflows, and developer tools.",
      responsibilities: [
        "Key developer on a production healthcare device-data agent that sends registry updates through authenticated APIs.",
        "Implemented print workflows and medical-image zoom features, and contributed to multi-monitor support.",
        "Developed MCP-based tools for defect analysis and code review, and automated unit, integration, and end-to-end tests.",
        "Currently implementing a case-processing feature using Go, Kubernetes, Helm, and Docker.",
      ],
    },
    {
      company: "HAPPIEST MINDS TECHNOLOGIES",
      location: "Bengaluru, India",
      dates: "Nov 2022 – Nov 2024",
      title: "Senior Software Engineer",
      summary:
        "Worked across application modernization, enterprise knowledge tools, and touch-interface software.",
      responsibilities: [
        "Migrated a Windows application to a web platform using Angular 13 and ASP.NET Web API.",
        "Implemented an enterprise knowledge assistant using document processing, RAG, embeddings, and vector search.",
        "Built touch-interface navigation and integrated WPF middleware components with the MVVM pattern.",
      ],
    },
    {
      company: "OPTION MATRIX INFOTECH",
      location: "Hyderabad, India",
      dates: "Oct 2020 – Nov 2022",
      title: "Software Developer",
      summary:
        "Developed workflow automation for a career-consulting and immigration business.",
      responsibilities: [
        "Built audit and response-management workflows with C#, ASP.NET Web API, SQL Server, and Angular.",
        "Implemented mobile checklists and ticketing for negative responses, including scheduled processing and email notifications.",
        "Supported IIS deployments and resolved defects before release.",
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
