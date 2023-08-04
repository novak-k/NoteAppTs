import { FC } from "react"
import { Note } from "../initialNotes"

type Props = {
  data: ITableRow,
  onEdit: (note: Note) => unknown,
  onArchive: (id: number) => unknown,
  onDelete: (id: number) => unknown
}

export interface ITableRow {
  id: number
  name: string
  createdAt: string
  content: string
  category: string
  dates?: string[]
  archived: boolean
}

export const TableRow: FC<Props> = ({ data, onEdit, onArchive, onDelete }) => {
  const style: React.CSSProperties = {
    textDecoration: data.archived ? "line-through" : "none",
  };
  return (
    <tr key={data.id}>
      <td style={style}>{data.name}</td>
      <td style={style}>{data.createdAt}</td>
      <td style={style}>{data.content}</td>
      <td style={style}>{data.category}</td>
      <td style={style}>{data.dates?.join(',')}</td>
      <td>
        <i className="fa fa-pencil" onClick={() => onEdit(data)} />
        {data.archived
          ? <i className="fa fa-undo" onClick={() => onArchive(data.id)} />
          : <i className="fa fa-archive" onClick={() => onArchive(data.id)} />
        }
        <i className="fa fa-trash" onClick={() => onDelete(data.id)} />
      </td>
    </tr>
  )
}
