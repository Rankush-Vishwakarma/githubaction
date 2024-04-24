import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import ViewMark from '../admin/viewMarks'
import Viewgroups from '../admin/Viewusers'
import Message from '../common/message'
import AcceptTopic from '../supervisor/acceptTopic'

jest.mock('axios')

//Testing Marks fetching
//IT20256814 - P.M.Kekulandara
const dummyMark = [
  {
    markID: 1,
    gid: 1,
    ev1Mark: 20,
    ev2Mark: 10,
    finalevMark: 15,
    doc1: 11,
    doc2: 14,
    docfinal: 31,
  },
  {
    markID: 1,
    gid: 21,
    ev1Mark: 13,
    ev2Mark: 17,
    finalevMark: 11,
    doc1: 15,
    doc2: 14,
    docfinal: 31,
  },
  {
    markID: 1,
    gid: 14,
    ev1Mark: 21,
    ev2Mark: 15,
    finalevMark: 31,
    doc1: 11,
    doc2: 21,
    docfinal: 11,
  },
]
test('marks', async () => {
  axios.get.mockResolvedValue({ data: dummyMark })
  render(<ViewMark />)

  const markList = waitFor(() => screen.findAllByTestId('marks'))

  expect(markList).toHaveLength(3)
})

//IT20226282 - Anudi divarathna
const dummyUser = [
  {
    userID: 1,
    name: 'kamal',
    position: 'student',
    email: 'kamal@gmail.com',
    phone: '0718456421',
    address: 'Kandy',
    id: 'IT789456',
    specialization: 'Data Science',
  },
]

test('user', async () => {
  axios.get.mockResolvedValue({ data: dummyUser })
  render(<Viewgroups />)

  const userList = waitFor(() => screen.findAllByTestId('user'))

  expect(userList).toHaveLength(3)
})

// IT20255824 - S.M.D.N.S.Senarath
const dummyMessage = [
  {
    gid: 1,
    author: 'Namal',
    email: 'Namal@gmail.com',
    message: 'Hi',
    time: '08.30',
  },
]

test('message', async () => {
  axios.get.mockResolvedValue({ data: dummyMessage })
  render(<Message />)

  const messageList = waitFor(() => screen.findAllByTestId('message'))

  expect(messageList).toHaveLength(1)
})
// IT20279370 - Hirosha Samarasekara
const dummyTopic = [
  {
    gid: 1,
    topic: 'react',
    specialization: 'Data Science',
    status: 'pending',
  },
]

test('topic', async () => {
  axios.get.mockResolvedValue({ data: dummyTopic })
  render(<AcceptTopic />)

  const toicList = waitFor(() => screen.findAllByTestId('topic'))

  expect(toicList).toHaveLength(1)
})
