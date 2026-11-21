
import csv
from pathlib import Path

CSV_FILE = (
    Path(__file__).parent
    / "datasets"
    / "yta-public-locations-2026-11-21-121402.csv"
)


def get_yta_locations(south=None, west=None, north=None, east=None):
    locations = {}

    with open(CSV_FILE, newline="", encoding="utf-8-sig") as file:
        reader = csv.DictReader(file)

        for row in reader:
            try:
                latitude = float(row["Latitude"])
                longitude = float(row["Longitude"])
            except (ValueError, TypeError):
                continue

            if not (-90 <= latitude <= 90 and -180 <= longitude <= 180):
                continue

            if south is not None and not south <= latitude <= north:
                continue

            if west is not None and not west <= longitude <= east:
                continue

            location_id = row.get("Location ID", "").strip()

            if not location_id:
                continue

            if location_id not in locations:
                locations[location_id] = {
                    "id": f"yta-{location_id}",
                    "name": row.get("Name", "Unnamed location"),
                    "locationType": row.get("Location Type", ""),
                    "address": row.get("Address", ""),
                    "city": row.get("City", ""),
                    "state": row.get("State", ""),
                    "district": row.get("District", ""),
                    "latitude": latitude,
                    "longitude": longitude,
                    "auditStatus": row.get("Audit Status", ""),
                    "features": [],
                    "source": "Yes to Access",
                }

            locations[location_id]["features"].append({
                "category": row.get("Category", ""),
                "subcategory": row.get("Subcategory", ""),
                "detectionStatus": row.get("Detection Status", ""),
                "surveyQuestion": row.get("Survey Question", ""),
                "surveyAnswer": row.get("Survey Answer", ""),
            })

    return list(locations.values())

