/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {Select} from '@sanity/ui'
import {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {set, StringInputProps, StringSchemaType, unset, useClient, useFormValue} from 'sanity'

type ReferenceLink = Record<string, string> | undefined

interface Alternative {
  name: string
  slug: {current: string}
}

interface Data {
  value: number
  title: string
}

const AlternativeContentList = (props: StringInputProps<StringSchemaType>) => {
  const {onChange, elementProps} = props
  const referenceLinkPath = [...props.path.slice(0, -1), 'referenceLink']
  const referenceLink = useFormValue(referenceLinkPath) as ReferenceLink
  const [data, setData] = useState<Data[]>([])
  const client = useClient({apiVersion: '2022-02-23'})

  const clearData = useCallback(() => {
    onChange(unset())
    setData([])
  }, [onChange, setData])

  useEffect(() => {
    const fetchSelectData = async () => {
      if (!referenceLink) {
        clearData()
        return
      }
      const alternatives = await client.fetch(`*[_id==$id][0]{alternatives}.alternatives`, {
        id: referenceLink._ref,
      })
      if (alternatives) {
        if (alternatives.length) {
          const blankOption = [{value: -1, title: ''}]
          const validOptions = alternatives.map((item: Alternative) => ({
            title: item.name,
            value: item.slug.current,
          }))
          setData([...blankOption, ...validOptions])
        }
      } else {
        clearData()
      }
    }
    fetchSelectData()
  }, [referenceLink, clearData, setData, client])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const inputValue = event.currentTarget.value
      onChange(inputValue ? set(inputValue) : unset())
    },
    [onChange],
  )

  return (
    <Select
      {...elementProps}
      value={props.value}
      onChange={handleChange}
      readOnly={elementProps.readOnly || data.length === 0}
    >
      {data.map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </Select>
  )
}

export default AlternativeContentList
