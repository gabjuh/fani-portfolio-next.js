export default interface IConcerts {
  sheetId: string;
  pageTitle?: string;
  active?: string;
  id: string;
  titleEn?: string;
  titleDe?: string;
  titleHu?: string;
  categoryEn?: string;
  categoryDe?: string;
  categoryHu?: string;
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  locationLink?: string;
  band?: string;
  bandLink?: string;
  concertLink?: string;
  descriptionEn?: string;
  descriptionDe?: string;
  descriptionHu?: string;
}