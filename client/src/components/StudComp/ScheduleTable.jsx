import React from 'react'
import { fetchCurriculumData } from '../../services/curriculumService'
import useFetch from '../../hooks/useFetch'
import DataLoader from '../Common/DataLoader'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import 'moment/locale/uk'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { RRule } from 'rrule';
import { useNavigate } from 'react-router-dom';

const ScheduleTable = ({ group }) => {
  const { data, loading, error } = useFetch(() => fetchCurriculumData({ group }))
  const navigate = useNavigate();

  moment.locale('uk');

  const localizer = momentLocalizer(moment)

  const messages = {
    allDay: 'Весь день',
    previous: 'Попередній',
    next: 'Наступний',
    today: 'Сьогодні',
    month: 'Місяць',
    work_week: 'Тиждень',
    day: 'День',
    // agenda: 'Cписок подій',
    date: 'Дата',
    time: 'Час',
    event: 'Подія',
    showMore: (total) => `+ (${total}) Подій`,
  }

  const getRRuleWeekday = (weekDays) => {
    switch (weekDays) {
      case 'MO': return RRule.MO;
      case 'TU': return RRule.TU;
      case 'WE': return RRule.WE;
      case 'TH': return RRule.TH;
      case 'FR': return RRule.FR;
      default: return RRule.MO;
    }
  }

  const events = [];

  data?.forEach(item => {
    item.disciplines.forEach((item) => {
      const { schedule } = item;
      const name = item.disciplineId.name;
      const id = item.disciplineId._id;
      const { startTime, count, duration, interval, weekday } = schedule;
      const startDate = new Date(startTime);
      const rule = new RRule({
        freq: RRule.WEEKLY,
        byweekday: [getRRuleWeekday(weekday)],
        count: count,
        interval: interval,
        dtstart: startDate,
      });

      const dates = rule.all().map((date) => ({
        title: name,
        start: date,
        end: new Date(date.getTime() + (duration * 60 * 60 * 1000)),
        id: id
      }))

      events.push(...dates);
    });
  });

  const handlEventClick = (event) => {
    navigate(`/discipline/${event.id}`);
  }

  const eventPropGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#6b46c1',
      color: 'white',
      fontSize: '0.85rem',
      fontWeight: '600', 
      padding: '2px 4px',
      cursor: 'pointer',
      textAlign: 'center',
      display: 'block', 
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
    return { style };
  };

  return (
    <DataLoader loading={loading} error={error} data={data}>

      <Calendar
        localizer={localizer}
        events={events}
        views={['work_week', 'day']}
        defaultView='work_week'
        style={{ width: 700 }}
        messages={messages}
        timeslots={1}
        step={60}
        min={new Date(2025, 0, 0, 8, 0)}
        max={new Date(2025, 0, 0, 18, 0)}
        eventPropGetter={eventPropGetter}
        onSelectEvent={handlEventClick}
      />
    </DataLoader>
  );
}

export default ScheduleTable