import React from 'react'
import styled from 'styled-components'
import projects from '../../datas/projects.json'
import Input from '../atoms/Input'
import { useSelector, useDispatch } from 'react-redux'

const Detailproject = () => {
  const themeState = useSelector(state => state.global.theme)
  const dispatch = useDispatch()
  return (
    <DetailprojectContainer>
      <div>
        <Input
          inputColor={themeState.colors.btnFontPrimary}
          type='text'
          labelName='Projet'
          onChange={event => dispatch(projects(event.target.value))}
        />
      </div>
      {projects.map(project => {
        return (
          <Card key={project.id}>
            <Title>Title: {project.title}</Title>
            <Date>Created at: {project.createdAt}</Date>
            <Description>
              <ul>
                <li>Is private : {project.isPrivate}</li>
                <li>Categorie: {project.Categorie}</li>
                <li>Contribution number: {project.nbContributors}</li>
                <li>License: {project.license}</li>
                <li>Number of Releases: {project.nbReleases}</li>
                <li>Number of issues: {project.nbIssues}</li>
              </ul>
            </Description>
          </Card>
        )
      })}
    </DetailprojectContainer>
  )
}

export default Detailproject

const Title = styled.h2`
  color: #000;
  font-weight: 500;
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`

const Description = styled.p`
  color: #000;
  font-weight: 300;
`

const DetailprojectContainer = styled.div`
  background-color: #fff;
  font-weight: 700;
  width: 100%;
  padding: 25px;
`

const Card = styled.div`
  background-color: #fff;
  font-weight: 300;
  width: 90%;
  -webkit-box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
`
