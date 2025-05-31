import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";

const events = [
  { date: "01.01.2000", description: "Рождение" },
  { date: "01.09.2006", description: "Первый день в школе" },
  { date: "15.06.2012", description: "Окончание начальной школы" },
  { date: "01.09.2012", description: "Поступление в среднюю школу" },
  { date: "20.05.2016", description: "Окончание средней школы" },
  { date: "01.09.2016", description: "Поступление в университет" },
  { date: "15.06.2020", description: "Окончание университета" },
  { date: "01.07.2020", description: "Начало первой работы" },
  { date: "01.01.2021", description: "Переезд в новый город" },
  { date: "01.06.2021", description: "Начало работы над крупным проектом" },
  { date: "01.01.2022", description: "Получение повышения" },
  { date: "01.09.2022", description: "Начало изучения нового языка программирования" },
  { date: "01.01.2023", description: "Запуск собственного проекта" },
  { date: "01.06.2023", description: "Участие в конференции" },
  { date: "01.09.2023", description: "Начало работы в новой компании" },
  { date: "01.01.2024", description: "Публикация статьи в журнале" },
  { date: "01.06.2024", description: "Получение награды за проект" },
  { date: "01.09.2024", description: "Начало преподавания" },
  { date: "01.01.2025", description: "Запуск нового продукта" },
  { date: "01.06.2025", description: "Путешествие в новую страну" },
];

export default function TimelineComponent() {
  return (
    <div style={{ padding: "20px", margin: "0 auto", maxWidth: "800px", fontFamily: "inherit" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Anatolii Kuzmin</h1>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <div style={{ textAlign: index % 2 === 0 ? "left" : "right" }}>
                <strong>{event.date}</strong>
                <p>{event.description}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}