export interface Asteroid {
  id: String;
  name: String;
  isPotentiallyHazardousAsteroid: boolean;
  estimatedDiameterInKms: {
    min: number;
    max: number;
  };
  closeApproachDates: {
    prevDate: Date | null;
    nextDate: Date | null;
  };
}

export interface AsteroidFullDetails extends Asteroid {
  fullName: String;
  absoluteMagnitudeH: number;
}
